
type Props = {
    imageSrc: string;
};

export default function Personalise2({ imageSrc }: Props) {
    return (
        <div
            className="relative left-1/2 shadow-[0_0_8px_8px_rgba(0,0,0,0.5)]"
            style={{
                width: '511.76px',
                height: '725px',
                transform: 'translateX(-50%)',
                backgroundImage: `url('${imageSrc}')`, // Use the imageSrc prop for dynamic image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
                <div
                    className="absolute  mt-23 ml-37 p-[1px] pl-[6px] font-bold text-[14px]  text-white rounded-full bg-[#FF5757]"
                    style={{
                        width: '22px',
                        height: '22px',
                    }}
                >T</div>
            <div className="absolute w-[202px] h-[88px] mt-26 ml-40 box-border border-[3px] border-dashed border-[#E84F4F]" />
    





            <div
                className="absolute border border-[#FF5757] rounded-[4px] bg-white/40 "
                style={{
                    width: '301.5px',
                    height: '371.5px',
                    left: '105px',
                    top: '219.5px',
                }}
            >
                <div
                    className="absolute m-32 mt-42 rounded-full bg-[#CCF6F7]"
                    style={{
                        width: '43.03px',
                        height: '43.03px',
                    }}
                >

                    <img
                        src="/icons/img+.png"
                        alt="Plus Icon"
                        className="w-6 h-6 m-2.5"
                    />
                </div>



            </div>
        </div>
    );
}
