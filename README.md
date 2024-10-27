#News NLP Insights
# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm i --legacy-peer-deps`

## Setting up the API

For some reason the meaningcloud.com servers were done and I wasn't able to register  so I had to find another alternative and fortunately I found one textRazop API



### Step 1: Signup for an API key

*

**For the textRazor API**: You can find the API [here](https://www.textrazor.com/docs/rest). Once you create an account with textRazor, you will be given a API key to start using the API. 


```

### Step 4: Environment Variables
Next we need to store our API keys, create .env file in the root of your directory and add this variable in the .env file:
```
APPLICATION_KEY=YOUR_API_KEY
```

```

### Step 5: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://www.textrazor.com/docs/rest#introduction). And you can see how simple it is to use the API

## Next Steps

Once you are hooked up to the textRazor API, you are most of the way there!

## serviceWorker has been configuered successfully


## The Production Build Command
``
npm run build-prod

``


