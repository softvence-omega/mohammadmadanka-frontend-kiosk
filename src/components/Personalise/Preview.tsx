
export default function Preview({ imageSrc = "cards/i3.png", text = "" }: { imageSrc?: string; text?: string } ) {
  return (
    <div
      className="relative left-1/2 translate-x-[-50%] w-[512px] h-[725px] bg-cover bg-center bg-no-repeat shadow-[0_0_8px_8px_rgba(0,0,0,0.5)]"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    />
  );
}   