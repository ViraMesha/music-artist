import Link from "next/link";
import {
  RiYoutubeFill,
  RiSpotifyFill,
  RiInstagramFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
  { path: "#", icon: <RiYoutubeFill /> },
  { path: "#", icon: <RiInstagramFill /> },
  { path: "#", icon: <RiSpotifyFill /> },
  { path: "#", icon: <RiSoundcloudFill /> },
];

type Props = {
  containerStyles: string;
  iconStyles: string;
};

export const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        const { path, icon } = item;
        return (
          <Link key={index} href={path}>
            <div className={`${iconStyles}`}>{icon}</div>
          </Link>
        );
      })}
    </div>
  );
};
