import React from 'react';
import BulletPoint from './BulletPoint';

interface BulletsProps {
    howMany: number;
    index: number;
    className?: string;
    onClick: (index: number) => void;
}

const Bullets: React.FC<BulletsProps> = React.memo(
    ({ onClick, index, className, howMany }) => {
        const generateBullets = () => {
            const bullets = [];
            for (let i = 0; i < howMany; i++) {
                bullets.push(
                    <BulletPoint
                        key={i}
                        index={i}
                        onClick={onClick}
                        isActive={index === i}
                    />,
                );
            }
            return bullets;
        };
        return <div className={className}>{generateBullets()}</div>;
    },
);

Bullets.displayName = 'Bullets';

export default Bullets;
