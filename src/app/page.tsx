'use client';
import { GlobalStyle } from '@/style/GlobalStyle';
import { mq } from '@/constants/mq';
import styled from '@emotion/styled';
import SideBar from '@/components/SideBar';

/*
 * sideBar mq2
 * always full screen
 *
 *
 * */

const Container = styled.div`
    display: flex;
    height: 100dvh;
    background-color: bisque;
`;
export default function Home() {
    console.log(mq);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <GlobalStyle />
            <Container>
                <SideBar />
            </Container>
        </main>
    );
}
