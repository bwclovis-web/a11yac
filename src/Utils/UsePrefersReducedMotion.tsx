import { useState } from 'react';

const UsePerfersReducedMotion = (defaultValue: boolean) => {
    const [motionReduced, setMotionReduced] = useState<boolean>(defaultValue);

    const updatePerferance = (reduce: boolean) => {
        setMotionReduced(reduce)
    }

    return [motionReduced, updatePerferance] as const;
}

export default UsePerfersReducedMotion;