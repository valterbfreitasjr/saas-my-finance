"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
// import { z } from "zod";

// const formSchema = z.object({
//   name: z
//     .string()
//     .trim()
//     .min(2, {
//       message: "O nome é obrigatório.",
//     })
//     .max(50),
//   amount: z.string().trim().min(1, {
//     message: "Informe um valor.",
//   }),
// });

const AddTransactionButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          Adicional transação <ArrowDownUpIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancelar</Button>
          <Button>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionButton;
