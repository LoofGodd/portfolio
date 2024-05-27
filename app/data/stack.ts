import htmlImg from "@/public/assets/images/stack/html.png"
import cssImg from "@/public/assets/images/stack/css.png"
import jsImg from "@/public/assets/images/stack/js.png"
import reactImg from "@/public/assets/images/stack/react.png"
import tsImg from "@/public/assets/images/stack/ts.png"
import nextImg from "@/public/assets/images/stack/next.png"
import pythonImg from "@/public/assets/images/stack/python.png"
import phpImg from "@/public/assets/images/stack/php.png"
import goImg from "@/public/assets/images/stack/go.png"
import shadcnImg from "@/public/assets/images/stack/shadcn.svg"
import remixImg from "@/public/assets/images/stack/remix.png"
import tailwindImg from "@/public/assets/images/stack/tailwind.png"

const stackData = [
  {
    title: "basics",
    stack: [
      { id: 0, title: "Html 5", image: htmlImg, bgColor: "" },
      { id: 1, title: "CSS 3", image: cssImg, bgColor: "" },
      { id: 2, title: "Javascript", image: jsImg, bgColor: "" },
      { id: 3, title: "Typescript", image: tsImg, bgColor: "" },
      { id: 4, title: "Python", image: pythonImg, bgColor: "" },
    ],
  },
  {
    title: "Frontend FWs",
    stack: [
      { id: 0, title: "React Js", image: reactImg, bgColor: "" },
      { id: 1, title: "Next Js", image: nextImg, bgColor: "" },
      { id: 2, title: "Remix run ", image: remixImg, bgColor: "" },
    ],
  },

  {
    title: "Styling",
    stack: [
      { id: 0, title: "Tailwind", image: tailwindImg, bgColor: "" },
      { id: 1, title: "Shadcn/ui ", image: shadcnImg, bgColor: "" },
    ],
  },

  {
    title: "Backend",
    stack: [
      { id: 0, title: "Go", image: goImg, bgColor: "" },
      { id: 1, title: "PHP", image: phpImg, bgColor: "" },
    ],
  },
]
export default stackData
