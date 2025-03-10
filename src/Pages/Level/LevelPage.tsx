import { Box } from "@radix-ui/themes";
import { useParams } from "react-router";
import Level from "../../Components/Levels/Level";
import { useUserContext } from "../../Context/UserContext";

export default function LevelPage() {
    const { levelId } = useParams();
    const user = useUserContext();

    if (!levelId) {
        return null;
    }

    return (
        <Box pl="8">
            <Level
                key={levelId}
                levelId={+levelId}
                onComplete={() => {
                    if (user.level < +levelId) {
                        user.setLevel(+levelId);
                    }
                }}
                onCorrect={() => {
                    user.setCompleted(+levelId);
                }}
            />
        </Box>
    );
}
