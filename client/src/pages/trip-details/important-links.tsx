import { Link2, PlusIcon } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex item-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
            <a className="block font-xs text-zinc-400 truncate hover:text-zinc-200" href="https://teste.com">https://teste.com</a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>

        <div className="flex item-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
            <a className="block font-xs text-zinc-400 truncate hover:text-zinc-200" href="https://teste.com">https://teste.com</a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <PlusIcon className='size-5' />
        Cadastrar novo link
      </Button>
    </div>
  )
}