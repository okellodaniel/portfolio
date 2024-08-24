import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function MainPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          Daniel Okello
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex">Resume</Button>
      </header>
      <main className="flex-1">
        <section className="container mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 py-24 md:px-6 md:py-32">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Daniel Okello</h1>
          <h2 className="text-2xl font-medium text-muted-foreground md:text-3xl">Software Developer</h2>
          <p className="max-w-[600px] text-center text-muted-foreground md:text-xl">
            I'm a passionate Software Developer with a focus on building game changing applications in vast domains of the software space.
          </p>
          <div className="flex gap-4">
            <Button>Hire Me</Button>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Projects
            </Link>
          </div>
        </section>
        <section
          id="about"
          className="container mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-24 md:px-6 md:py-32"
        >
          <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                I'm a Software Developer with a passion for creating game changing applications in AI and the data engineering domain. I
                have experience working with a variety of technologies, including Python, and SQL, C#.
              </p>
            </div>
            <img
              src="/placeholder.svg"
              width="400"
              height="400"
              alt="About"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <section
          id="projects"
          className="container mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-24 md:px-6 md:py-32"
        >
          <div className="w-full">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Projects</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">Check out some of the projects I've worked on.</p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project 1"
                className="aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-muted-foreground">A brief description of the project.</p>
                <div className="flex gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    GitHub
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project 2"
                className="aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="text-muted-foreground">A brief description of the project.</p>
                <div className="flex gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    GitHub
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project 3"
                className="aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="text-muted-foreground">A brief description of the project.</p>
                <div className="flex gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    GitHub
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section
          id="contact"
          className="container mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-24 md:px-6 md:py-32"
        >
          <div className="w-full">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">Have a project in mind? Let's chat!</p>
          </div>
          <form className="w-full max-w-md space-y-4">
            <Input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            />
            <Textarea
              placeholder="Message"
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">&copy; 2024 Daniel Okello. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
