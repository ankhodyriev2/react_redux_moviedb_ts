import React, {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {
}

const NotFound: FC<IProps> = () => {
    return (
        <div>
            <h1>Oops  something went wrong!</h1>
        </div>
    );
};

export {NotFound};