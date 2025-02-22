import Song from "@/components/Song";
import songs from "@/data/songs";

export default function Songs() {
    return (
        <div className="mt-12 mb-6 xl:px-72 px-10">

            <h1 className="text-3xl font-semibold">
                Music
            </h1>

            {songs.map((song, index) => (
                <Song key={index} title={song.title} composer={song.composer} additionalText={song.additionalText} date={song.date} url={song.url} />
            ))}
        </div> 
    );
}