import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
          listClassName="list-disc ml-4"
          listItemClassName=""
        />
        <div className="flex justify-center">
          <h2 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Create Post
          </h2>
        </div>
        <TextField
          placeholder="Please Enter Title"
          name="name"
          validation={{ required: true }}
          className="border rounded-md px-2 py-1 outline-none shadow-sm w-full mt-5"
          errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none shadow-sm w-full mt-5"
        />
        <FieldError name="name" className="block text-red-700" />

        <TextField
          placeholder="Please Enter Your Email"
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          className="border rounded-md px-2 py-1 outline-none shadow-sm w-full mt-5"
          errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none shadow-sm w-full mt-5"
        />
        <FieldError name="email" className="block text-red-700" />

        <TextAreaField
          placeholder="Please Enter Your Message"
          name="message"
          validation={{ required: true }}
          className="border rounded-md px-2 py-1 outline-none shadow-sm w-full mt-5"
          errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none shadow-sm w-full mt-5"
        />
        <FieldError name="message" className="block text-red-700" />

        <div className="flex justify-center">
          <Submit
            className="block bg-blue-700 text-white mt-8 px-4 py-2 rounded"
            disabled={loading}
          >
            Save
          </Submit>
          &nbsp;
          <button className="block bg-purple-500 text-white mt-8 px-4 py-2 rounded">
            Reset
          </button>
        </div>
      </Form>
    </>
  )
}

export default ContactPage
