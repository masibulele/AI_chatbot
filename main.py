from flask import Flask, render_template , request
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = Flask(__name__)
messages = [
            {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
            {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
        ]

@app.route('/',methods=['GET','POST'])
def home():
    return render_template('index.html')

# gets chatbot responses
def get_completion():
    client= OpenAI()
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages= messages,
        temperature= 0,
        n=1,
        max_tokens= 500,
    )
    print(completion.choices[0].message)

def get_userInput():
    usertext=0

if __name__ == '__main__':
    app.run(debug=True)