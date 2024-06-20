import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements';

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FormContent>
                    <Form method="post" action="/signin">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput type="email" name="email" required />
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput type="password" name="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default SignIn;
