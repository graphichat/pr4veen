import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Mail, Phone } from "lucide-react";
import { MotionDiv } from "@/components/animations/MotionDiv";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </MotionDiv>

        <div className="grid gap-8 md:grid-cols-2">
          <MotionDiv animation="slideInLeft" trigger="inView" delay={0.2} className="h-full">
            <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <a
                href="mailto:praveen.nalakurthi@gmail.com"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">praveen.nalakurthi@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+919980321700"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+91-99803 21700</p>
                </div>
              </a>
            </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv animation="slideInRight" trigger="inView" delay={0.3} className="h-full">
            <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <form className="space-y-4 h-full flex flex-col">
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input id="name" placeholder="Your name" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </Field>
                  <Field className="flex-1 flex flex-col">
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="flex-1"
                    />
                  </Field>
                  <Button type="submit" className="w-full mt-auto">
                    Send Message
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

