import { X, Tag, Calendar } from "lucide-react";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal}: CreateActivityModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
         <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
           <div className='space-y-2'>
             <div className='flex items-center justify-between'>
               <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
               <button onClick={closeCreateActivityModal}>
                 <X className='size-5 text-zinc-400' />
               </button>
             </div>
             <p className='text-zinc-400 text-sm'>Todos convidados podem visualizar as atividades.</p>
           </div>
   
           <form className='space-y-3'>
             <div className='h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
               <Tag className='size-5 text-zinc-400' />
               <input
                 className='w-full bg-zinc-950 text-zinc-50 outline-none placeholder:text-zinc-400 flex-1'
                 type="text"
                 name="title"
                 placeholder='Qual a atividade'
               />
             </div>
   
            <div className="flex items-center gap-2">
              <div className='h-14 flex-1 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                <Calendar className='size-5 text-zinc-400' />
                <input
                  className='w-full bg-zinc-950 text-zinc-50 outline-none placeholder:text-zinc-400 flex-1'
                  type="datetime-local"
                  name="occurs_at"
                  placeholder='Data e hora da atividade'
                />
              </div>
            </div>
   
             <button type='submit' className='bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400'>
               Salvar atividade
             </button>
           </form>
         </div>
       </div>
  )
}