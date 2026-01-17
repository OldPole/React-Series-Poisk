import { Link } from '@tanstack/react-router';
import { Menu, Search, type LucideIcon } from 'lucide-react';
import {
  iconComponents,
  MOVIE_LISTS,
  TOP_LISTS,
} from '@/core/constants/constants';
import { type MenuItem } from '@/core/constants/constants.types';
import { Button } from '@/core/ui/button';
import { Input } from '@/core/ui/input';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/core/ui/sheet';

export const Header = () => {
  const renderLink = (item: MenuItem) => {
    const Icon: LucideIcon = iconComponents[item.icon];

    return (
      <SheetClose asChild key={item.title}>
        <Link
          to={item.url}
          className="flex items-center gap-4 rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-red-500"
        >
          <Icon size={20} />
          <span className="text-[15px] font-medium">{item.title}</span>
        </Link>
      </SheetClose>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 py-3 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer hover:bg-black hover:text-red-600"
              >
                <Menu size={28} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-80 border-zinc-800 bg-zinc-900 p-0 text-white"
            >
              <SheetHeader className="p-6 text-left">
                <SheetTitle className="text-2xl font-black tracking-tighter text-red-600 uppercase">
                  SeriesPoisk
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-6 px-4">
                <div className="flex flex-col gap-1 border-b border-zinc-800 pb-6">
                  {TOP_LISTS.map(renderLink)}
                </div>
                <div className="flex flex-col gap-1">
                  {MOVIE_LISTS.map(renderLink)}
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-red-600 uppercase transition-opacity hover:opacity-80"
          >
            SeriesPoisk
          </Link>
        </div>

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
          />
          <Input
            type="search"
            placeholder="Поиск фильмов и сериалов..."
            className="w-80 border-zinc-800 bg-zinc-900/50 pl-10 focus-visible:ring-red-600 focus-visible:ring-offset-0"
          />
        </div>
      </div>
    </header>
  );
};
