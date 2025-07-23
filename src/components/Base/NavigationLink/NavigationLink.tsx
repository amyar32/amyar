import { ComponentProps } from 'react';
import { Link } from '@/i18n/navigation';

type Props = ComponentProps<typeof Link>;

export default function NavigationLink({ color, href, ...rest }: Props) {
    return <Link href={href} style={{ color: 'unset', textDecoration: 'unset' }} {...rest} />;
}