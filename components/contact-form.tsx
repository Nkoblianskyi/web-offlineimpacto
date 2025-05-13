"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Introduce un email válido" }),
  phone: z.string().min(9, { message: "Introduce un número de teléfono válido" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
})


type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      privacy: false,
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Mensaje enviado",
      description: "Hemos recibido tu mensaje. Te responderemos pronto.",
    })

    form.reset()
    setIsSubmitting(false)
    setDialogOpen(true)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre*</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono*</FormLabel>
                  <FormControl>
                    <Input placeholder="+34 600 000 000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre de tu empresa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje*</FormLabel>
                <FormControl>
                  <Textarea placeholder="¿En qué podemos ayudarte?" className="min-h-[120px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    Acepto la{" "}
                    <Link href="/politica-privacidad" className="text-brand-600 hover:underline">
                      política de privacidad
                    </Link>{" "}
                    y el tratamiento de mis datos
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>
      </Form>

      {/* ✅ Popup de confirmación */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-green-600 text-2xl">¡Mensaje enviado!</DialogTitle>
          </DialogHeader>
          <p className="text-gray-700 mt-2">
            Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
          </p>
          <Button onClick={() => setDialogOpen(false)} className="mt-6 bg-red-600 hover:bg-red-700 text-white">
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
