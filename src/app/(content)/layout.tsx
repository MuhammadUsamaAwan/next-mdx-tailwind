export default function ContentLayout({ children }: React.PropsWithChildren) {
  return <div className='prose mx-auto break-words py-10 dark:prose-invert'>{children}</div>;
}
