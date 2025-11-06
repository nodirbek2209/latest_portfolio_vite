import { useEffect } from "react"
import { useI18n } from "@/lib/i18n"

const SPLINE_SCRIPT_ID = "spline-web-component"
const SPLINE_SCRIPT_SRC = "https://unpkg.com/@splinetool/viewer@latest"

export default function Viewer() {
  const { t } = useI18n()
  useEffect(() => {
    // Inject the Spline web component script once on the client
    if (!document.getElementById(SPLINE_SCRIPT_ID)) {
      const script = document.createElement("script")
      script.id = SPLINE_SCRIPT_ID
      script.type = "module"
      script.src = SPLINE_SCRIPT_SRC
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section aria-label="3D Showcase" className="relative py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-3xl font-semibold tracking-tighter text-transparent md:text-5xl">
            {t("viewer.title")}
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            {t("viewer.subtitle")}
          </p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-background/50 p-2 backdrop-blur-md">
          {/* Custom element provided by the Spline web component */}
          {/* @ts-ignore - defined via global JSX typings in shims */}
          <spline-viewer
            url="https://prod.spline.design/LYDQprkXc1CX7bd5/scene.splinecode"
            style={{ width: "100%", height: "70vh", borderRadius: "1rem" }}
          />
        </div>
      </div>
    </section>
  )
}
