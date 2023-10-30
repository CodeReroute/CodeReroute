import { CircledButton } from '../../utils/hooks/language/LanguageCircle';
import { SmallText } from '../styles/theme';

interface MemberTitleProps<T = string> {
    id: T;
    name: string;
    title?: JSX.Element | string;
    role: string;
    className?: string;
    onClick?: (id: T) => unknown;
}

const MemberTitle: React.FC<MemberTitleProps> = ({
    id,
    name,
    title,
    role,
    onClick,
    className,
}) => {
    const handleClick = () => {
        onClick?.(id);
    };
    return (
        <div id={id} className={className}>
            <SmallText className="name">{name}</SmallText>
            {title && (
                <SmallText bold className="title">
                    {title}
                </SmallText>
            )}
            <SmallText bold className="role">
                {role}
            </SmallText>
            {onClick && (
                <div className="bio-button-wrapper">
                    <CircledButton
                        text="BIO"
                        onClick={handleClick}
                        className="bio-button"
                    />
                </div>
            )}
        </div>
    );
};

export default MemberTitle;
