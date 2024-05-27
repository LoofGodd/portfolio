import AnimatedCursor from "react-animated-cursor"
interface Props {
  color: string
}
export default function Cursor({ color }: Props) {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        border: `3px solid ${color}`,
      }}
      innerStyle={{
        backgroundColor: color,
      }}
      clickables={["a", "button", "select", "input", ".link"]}
    />
  )
}
