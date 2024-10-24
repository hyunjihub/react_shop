import Rating from "../common/Rating";

const ProductDetail = ({ product }): JSX.Element => {
  return (
    <div className="flex mt-10">
      <figure className="flex-1 p-5">
        <img className="h-72 object-contain" src={product.image} alt={product.title} />
      </figure>
      <div className="flex-[4] py-10 px-20">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <div className="px-2 bg-[#77E4C8] rounded-xl text-sm text-black font-semibold">NEW</div>
        </div>

        <p className="py-3">{product.description}</p>
        <Rating rate={product.rating.rate} count={product.rating.count} />
        <p className="py-5 text-3xl font-medium">${product.price}</p>
        <div className="flex gap-5">
          <button className="p-3 rounded-lg bg-[#5D3587] hover:bg-[#392467] text-sm text-white font-semibold">
            장바구니에 담기
          </button>
          <button className="p-3 rounded-lg hover:bg-black border border-black hover:text-white text-sm font-semibold">
            장바구니로 이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
