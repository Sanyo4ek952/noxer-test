import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store.ts";
import { toggleLike } from "../../store/likesSlice.ts";

interface Props {
  productId: number;
  className?: string;
  onClick: () => void;
}

export function LikeButton({ productId, className, onClick }: Props) {
  const dispatch = useDispatch();
  const liked = useSelector((state: RootState) =>
    state.likes.likedIds.includes(productId)
  );
  const onClickHandler = () => {
    onClick();
    dispatch(toggleLike(productId));
  };
  return (
    <button className={className} onClick={onClickHandler}>
      {liked ? "❤️" : "🤍"}
    </button>
  );
}
