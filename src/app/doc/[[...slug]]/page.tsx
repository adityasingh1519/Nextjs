
export default function Doc({
  params,
}: {
  params: {
    slug: String[];
  };
}) {
  if (params.slug?.length == 2) {
    return (
      <>
        <h1>
          this is the feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
      </>
    );
  } else if (params.slug?.length == 1) {
    return (
      <>
        <h1>this is the feature {params.slug[0]}</h1>
      </>
    );
  }
  return (
    <>
      <h1>Doc Homepage</h1>
    </>
  );
}
