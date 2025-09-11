import "./slider-item.css";

interface Props {
  categoryId: number;
  categoryName: string;
  categoryImage: string;
  className?: string;
}
export const SliderItem = ({
  categoryImage,
  categoryName,
  className,
}: Props) => {
  return (
    <div className={className}>
      {categoryImage ? (
        <img className={"image"} src={categoryImage} alt="" />
      ) : (
        <img className={"image"} src={"public/i.webp"} alt="" />
      )}
      <div className={"category-name"}>{categoryName}</div>
    </div>
  );
};
