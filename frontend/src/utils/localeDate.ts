import { useI18n } from "vue-i18n";
export const localDate = ({
  year,
  month,
  day,
}: {
  year: number;
  month: number;
  day: number;
}) => {
  const { locale } = useI18n();

  const date = new Date(Date.UTC(year, month, day)).toLocaleDateString(
    locale.value,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return date;
};