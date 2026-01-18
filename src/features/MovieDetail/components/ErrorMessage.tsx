import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/core/ui/button';

export const ErrorMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-10 px-4 text-center text-red-500">
      <h2 className="text-2xl font-bold">Ошибка загрузки фильма</h2>
      <p>Фильм не найден.</p>
      <Button className="mt-4" onClick={() => navigate({ to: '/' })}>
        На главную
      </Button>
    </div>
  );
};
