import * as React from 'react';
import {StoriesProps} from "components/Stories/Stories.props";
import {styled} from "theme";
import {Divider} from "components/Divider/Divider";

const StoryPreview = styled.div`
    background: url(${(props) => props.url});
    width: calc(33.33% - 5px);
    margin: 0px 5px;
    box-sizing: border-box;
    background-position: cover;
`;
const StoriesComponent = ({stories = [], className}: StoriesProps) => (
    <section>
        <Divider title={'Historias'} />
        <div className={className}>
            {stories.map(story => (
                <StoryPreview url={'assets/erifranck.png'} />
            ))}
            <StoryPreview url={'assets/erifranck.png'} />
            <StoryPreview url={'assets/erifranck.png'} />
            <StoryPreview url={'assets/erifranck.png'} />
            <StoryPreview url={'assets/erifranck.png'} />
        </div>
    </section>
);

export const Stories = styled(StoriesComponent)`
    height: 300px;
    justify-content: center;
    transform: skew(10deg);
    padding: 10px 30px 20px 30px;
    box-sizing: border-box;
    display: flex;
    margin-top: 10px;
`;
