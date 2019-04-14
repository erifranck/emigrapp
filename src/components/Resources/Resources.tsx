import * as React from 'react';
import {ResourcesProps} from "components/Resources/Resources.props";
import {Divider} from "components/Divider/Divider";
import {styled} from "theme";

const ResourcesComponent = ({className, resources = []}: ResourcesProps) => (
    <section>
        <Divider title={'Recursos para padres'} />
        <div className={className}>
            {resources.map(resource => (
                <div></div>
            ))}
        </div>
    </section>
);

export const Resources = styled(ResourcesComponent)`
   height: 300px;
`;
