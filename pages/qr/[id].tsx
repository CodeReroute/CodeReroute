import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LanguageProvider from '../../utils/hooks/language/LanguageProvider';
import Hero from '../../components/hero/Hero';
import { FadeIn } from '../../components/styles/animations';
import Image from 'next/image';
import Logo from '../../public/assets/logo.png';
import {
    LighterHeading,
    black,
    darkBrown,
    darkGray,
    largerMobileBreakPoint,
    lightBrown,
    lightGray,
    lighterBrown,
} from '../../components/styles/theme';
import styled, { ThemeContext, ThemeProvider } from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    p.heading-one {
        margin-bottom: 4px;
    }
    p.heading-two {
        margin-top: 4px;
    }
    .code-icons {
        margin-top: 30px;
        text-align: center;
    }
    .logo {
        margin-top: 15px;
        text-align: center;
    }
    .text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 1s ease;
        text-align: center;
    }
    .text-content {
        margin: auto;
        max-width: 800px;
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .text {
            margin-left: 0;
        }
    }
`;

const fetchQrInfo = async (
    /// isko bahir lejao
    id: string | string[] | undefined,
    restaurantId: string,
) => {
    try {
        const response = await fetch(
            `http://localhost:5000/promotion/qr/${id}`,
            {
                method: 'GET',
                headers: [
                    ['restaurantId', restaurantId],
                    ['Content-Type', 'application/json'],
                    ['version', '1'],
                    [
                        'token',
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhN2Y1ZDUyLTZlNTUtNDc5MC1hODI1LThhYzNhMmQ4OGM1MCIsImZpcnN0TmFtZSI6ImFsaSIsImxhc3ROYW1lIjoia2hhbiIsImVtYWlsIjoidXNtYW4uY2hoMjAwMUBnbWFpbC5jb20iLCJwaG9uZU51bWJlciI6Iis5MjMwMjIxOTUwMDUiLCJhY2NvdW50VHlwZSI6IkNVU1RPTUVSIiwiZW5hYmxlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0wOS0xNVQwNTozODo0My44NjRaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0yNVQxNzowNDoxOC40ODZaIiwiY2l0eUlkIjoiMTU2ODE4YTQtZTAxOC00N2ExLWJhY2UtNDc1MGRkZTRkOGQxIiwiY2l0eSI6eyJpZCI6IjE1NjgxOGE0LWUwMTgtNDdhMS1iYWNlLTQ3NTBkZGU0ZDhkMSIsIm5hbWUiOiJLYXJhY2hpIiwic3RhdGUiOiJzaW5kaCIsImNvdW50cnkiOiJQYWtpc3RhbiIsImVuYWJsZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTE1VDA1OjM4OjQzLjg0N1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTA5LTE1VDA1OjM4OjQzLjg0N1oifSwicmVzdGF1cmFudFVzZXJzIjpbeyJ1c2VySWQiOiIyYTdmNWQ1Mi02ZTU1LTQ3OTAtYTgyNS04YWMzYTJkODhjNTAiLCJyZXN0YXVyYW50SWQiOiIxN2QwNTAzOC02NmJkLTQxOTYtYmM4Yi05NWFhMmRlNDhmNGMiLCJ1c2VyUm9sZSI6Ik9XTkVSIiwiZW5hYmxlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0xMS0wNlQxMzowMjo0NC41MjJaIiwidXBkYXRlZEF0IjoiMjAyMy0xMS0wNlQxMzowMjo0NC41MjJaIn0seyJ1c2VySWQiOiIyYTdmNWQ1Mi02ZTU1LTQ3OTAtYTgyNS04YWMzYTJkODhjNTAiLCJyZXN0YXVyYW50SWQiOiIzN2Y0YzM4NC1kNzVhLTQzOGMtYTlmOS0zNGM4OGZjNGIzM2EiLCJ1c2VyUm9sZSI6Ik9XTkVSIiwiZW5hYmxlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0xMS0wNVQxMzo0OTo1OS4zMDhaIiwidXBkYXRlZEF0IjoiMjAyMy0xMS0wNVQxMzo0OTo1OS4zMDhaIn0seyJ1c2VySWQiOiIyYTdmNWQ1Mi02ZTU1LTQ3OTAtYTgyNS04YWMzYTJkODhjNTAiLCJyZXN0YXVyYW50SWQiOiI3MWM1YjgxNy1kZDgyLTQ1MTctYmIzYi0xMWMyNDM5MzgyODQiLCJ1c2VyUm9sZSI6Ik9XTkVSIiwiZW5hYmxlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0wOS0xNVQwNTozOToyOS42NzJaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0xNVQwNTozOToyOS42NzJaIn0seyJ1c2VySWQiOiIyYTdmNWQ1Mi02ZTU1LTQ3OTAtYTgyNS04YWMzYTJkODhjNTAiLCJyZXN0YXVyYW50SWQiOiI3NWRhMDQ4Zi00NDVhLTQwZWQtYjA5Yy0yMmNiOTUyZjZiYzgiLCJ1c2VyUm9sZSI6Ik9XTkVSIiwiZW5hYmxlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0wOS0xOFQxNjoyODoxMC4wMzBaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0xOFQxNjoyODoxMC4wMzBaIn1dLCJyZXN0YXVyYW50SW52aXRhdGlvbnMiOlt7ImlkIjoiYWMwNzZmODQtNDIzYS00MmY1LWE1OTQtMDBmZjU1NDM0NWRmIiwibmFtZSI6IkhpZ2hUZWEiLCJhZGRyZXNzIjoiMjgyIG1pbGxib3VybmUiLCJjaXR5SWQiOiIxNTY4MThhNC1lMDE4LTQ3YTEtYmFjZS00NzUwZGRlNGQ4ZDEiLCJjb3VudCI6MSwicGhvbmUiOm51bGwsImVuYWJsZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMDktMTVUMDU6Mzk6NDEuNTMwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDktMTVUMDU6Mzk6NDEuNTMwWiJ9XSwiaWF0IjoxNzAxMjQyNjQ4fQ.vbbTgQ7y2NhK1eRj1fMQdzUc98Ib8iXHeKIMag5HdeI',
                    ],
                ],
            },
        );
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export default function QrPage() {
    const router = useRouter();
    const [id, setId] = useState<string | string[] | undefined>();
    const [data, setData] = useState<any>();
    useEffect(() => {
        if (router.isReady) {
            setId(router.query.id);
        }
        if (!router.isReady) return;
    }, [router.isReady]);

    useEffect(() => {
        if (id)
            fetchQrInfo(id, '71c5b817-dd82-4517-bb3b-11c243938284')
                .then((data) => setData(data))
                .catch((error) => console.error(error));
    }, [id]);

    const Card = ({ cardData }: { cardData: any }) => {
        return (
            <div
                style={{
                    border: '1px solid black',
                    width: 'fit-content',
                    height: 'max-content',
                    padding: '1rem',
                    background: lightGray,
                }}
            >
                <h3>card Id : {cardData.id}</h3>
                <h3>restaurantId : {cardData.restaurantId}</h3>
                <h3>Amount : {cardData.amount}</h3>
                <h3>type OF Promotion: {cardData.type}</h3>
            </div>
        );
    };

    return (
        <div style={{ background: lighterBrown, height: '100vh' }}>
            <FadeIn
                className="logo"
                style={{
                    background: lightBrown,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Image
                    priority
                    src={Logo}
                    width={200}
                    height={27.51}
                    placeholder="blur"
                    alt="Logo"
                    title="Logo"
                />
            </FadeIn>

            <div>
                {data ? [<Card key={data.id} cardData={data} />] : 'loading...'}
            </div>
        </div>
    );
}
