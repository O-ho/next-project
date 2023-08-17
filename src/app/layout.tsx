'use client';
import styled from '@emotion/styled';

const Container = styled.body`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: tomato;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <div
                // css={css`
                //     width: 20px;
                //     background-color: tomato;
                //     ${mq[0]} {
                //         background-color: tomato;
                //     }
                // `}
                >
                    {children}
                </div>
            </body>
        </html>
    );
}
