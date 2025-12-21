import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Graphy",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notes.graphy.ca",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fff8e7", // Cosmic latte - warm, soft background
          lightgray: "#e8dcc8", // Warmer light tone
          gray: "#a8a08a", // Muted warm gray
          darkgray: "#4a5240", // Dark olive
          dark: "#2d3027", // Deep olive, almost black
          secondary: "#556b2f", // Dark olive green
          tertiary: "#87a96b", // Sage green
          highlight: "rgba(135, 169, 107, 0.15)", // Sage green highlight
          textHighlight: "#d4e8c1aa", // Soft sage highlight
        },
        darkMode: {
          light: "#1a0f1f", // Deep dark purple
          lightgray: "#2d1b3d", // Dark purple
          gray: "#5a4866", // Muted purple
          darkgray: "#d4a5c7", // Light pink-purple
          dark: "#f5e6f0", // Very light pink for text
          secondary: "#9d4edd", // Vibrant purple
          tertiary: "#ff6b9d", // Pink accent
          highlight: "rgba(157, 78, 221, 0.15)", // Purple highlight
          textHighlight: "#ff6b9d44", // Pink text highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
      Plugin.CNAME(),
    ],
  },
}

export default config
