import {Metadata} from 'next'

export const metadata : Metadata = {
    title: {
        default:'fall back title',
        template:' %s | template'
    },
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Features Product</h2>
    </>
  );
}
