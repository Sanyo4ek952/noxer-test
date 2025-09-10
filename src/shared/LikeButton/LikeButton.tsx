import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store.ts";
import { toggleLike } from "../../store/likesSlice.ts";

interface Props {
  productId: number;
  className?: string;
}

export function LikeButton({ productId, className }: Props) {
  const dispatch = useDispatch();
  const liked = useSelector((state: RootState) =>
    state.likes.likedIds.includes(productId)
  );

  return (
    <button
      className={className}
      onClick={() => dispatch(toggleLike(productId))}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}
