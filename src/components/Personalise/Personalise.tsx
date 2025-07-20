type PersonaliseButtonProps = {
  onClick: () => void;
};

export default function PersonaliseButton({ onClick }: PersonaliseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-row justify-center items-center px-6 py-4 gap-2 w-full max-w-[379px] h-14 bg-[#FF5757] rounded-[49px] hover:bg-[#e54545] transition-colors"
    >
      <span className="text-white text-xl font-normal leading-[120%]">Personalise</span>
    </button>
  );
}