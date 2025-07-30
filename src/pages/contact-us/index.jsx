import React from 'react';
import Container from '@/components/ui/Container/Container';
import { axiosInstanceFooter } from '@/utils/axios_footer';

export const getServerSideProps = async () => {
    try {
        const { data } = await axiosInstanceFooter.get('/footer-pages/4');
        return {
            props: { pageData: data },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

const ContactUs = ({ pageData }) => (
    <section>
        <Container>
            <div className="wrap">
                <h1>{pageData.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: pageData.description.replace(/\r\n/g, '<br />'),
                    }}
                />
            </div>
        </Container>
    </section>
);

export default ContactUs;
