import Image from "next/image";

const Talker = ({image, name}) => {
    return (
        <div className="flex flex-col items-center mt-7">
            <div className="w-40 h-40 bg-green-300 rounded-full flex justify-center items-center">
                <Image src={image} className="w-36 h-36 object-cover" />
            </div>
            <div className="text-bold text-xl mt-4">{name}</div>
        </div>
    );
};

export default Talker;
