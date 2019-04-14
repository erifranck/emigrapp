import * as React from 'react';
import {TipsProps} from "components/Tips/Tips.props";
import {Divider} from "components/Divider/Divider";
import {styled} from "theme";

const TipPreview = () => (
    <div>
    </div>
);

const TipsComponent = ({className, tips = []}: TipsProps) => (
    <section>
        <Divider title={'Tips para migrantes'} />
        <div className={className}>
            {tips.map(tip => (
                <TipPreview/>
            ))}
        </div>
    </section>
);

export const Tips = styled(TipsComponent)`
    position: relative;
    height: 300px;
    padding-bottom: 20px;
    padding-top: 20px;
`;
