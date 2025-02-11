import { useEffect, useState } from 'react';
import CalendarData from '../components/CalendarData';
import useModal from './useModal';
import { modals } from '@/components/Modals';
import { useQuery } from '@tanstack/react-query';
import { fetchDate, fetchUserQA } from '@/services/calendar';
import { useQueryClient } from '@tanstack/react-query';

export interface CalendarPosition {
  date: number;
  x: string;
  y: string;
  isOpen: boolean;
  giftImage: React.ReactNode;
  calendarId?: number;
  qa?: {
    question: string;
    answer: string;
  };
  drawName?: string | null;
}

const useCalendar = (userId: string) => {
  const queryClient = useQueryClient();
  const [calendarPositions, setCalendarPositions] = useState<
    CalendarPosition[]
  >([]);
  const { openModal } = useModal();
  const [browseToday, setBrowseToday] = useState<number>(new Date().getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();

      setBrowseToday((prevDay) =>
        prevDay !== currentDay ? currentDay : prevDay
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleUnableConfirmModalClick = (date: number) => {
    openModal(modals.UnableConfirmModal, {
      onSubmit: () => {},
      Day: () => date,
    });
  };

  const toggleWindow = (date: number) => {
    queryClient.invalidateQueries({
      queryKey: ['today'],
    });
    if (date > today) {
      handleUnableConfirmModalClick(date);
    } else if (date === today) {
      setCalendarPositions((prev) =>
        prev.map((pos) =>
          pos.date === date ? { ...pos, isOpen: !pos.isOpen } : pos
        )
      );
    } else {
      handleUnableConfirmModalClick(date);
    }
  };

  const {
    data: userCalendarData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['userCalendar', userId],
    queryFn: () => fetchUserQA(userId),
    enabled: !!userId,
  });

  const { data: todayData } = useQuery({
    queryKey: ['today'],
    queryFn: () => fetchDate(),
  });

  const today = todayData?.data || browseToday;

  useEffect(() => {
    if (userCalendarData) {
      const mergedData = CalendarData.map((calendarItem) => {
        const matchingUserCalendar = userCalendarData.data.find(
          (userCalendar) => userCalendar.calendarDate === calendarItem.date
        );

        if (matchingUserCalendar) {
          return {
            ...calendarItem,
            calendarId: matchingUserCalendar.calendarId,
            qa: matchingUserCalendar.qa,
            drawName: matchingUserCalendar.drawName,
            isOpen: true,
          };
        }

        return {
          ...calendarItem,
          isOpen: false,
        };
      });

      setCalendarPositions(mergedData);
    }
  }, [userCalendarData]);

  return {
    calendarPositions,
    setCalendarPositions,
    toggleWindow,
    today,
    isLoading,
    isError,
  };
};

export default useCalendar;
