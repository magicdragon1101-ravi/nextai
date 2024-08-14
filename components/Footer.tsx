import Link from 'next/link';

export default function Footer() {
  return (
    <div className={'mb-6 flex items-center justify-center pt-6 text-sm'}>
      <Link href={'https://www.enzo.codes'} target={'_blank'}>
        ✦ Made with love by Ravi ✦
      </Link>
    </div>
  );
}
