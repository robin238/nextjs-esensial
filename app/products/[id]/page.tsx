interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}
const ProductPage = async ({ params }: ProductPageProps) => {
  // const id = params.id;
  // const { id } = params;
  const resultParam = await params;
  console.log(resultParam);
  return <div>Product detail Page</div>;
};

export default ProductPage;
