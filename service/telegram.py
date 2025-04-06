# import requests
#
# # 🔐 Your Telegram bot token and chat ID
# BOT_TOKEN = "7597490293:AAEXJH1Hx6-73a005vHZ9HSgi1uWIONeNrE"
# CHAT_ID = "1335714186"
#
# # 1️⃣ Function to send a plain text message
# def send_text_message(message):
#     url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
#     payload = {
#         "chat_id": CHAT_ID,
#         "text": message
#     }
#     response = requests.post(url, json=payload)
#     print("Text Message Status:", response.status_code)
#     print("Response:", response.json())
#
# # 2️⃣ Function to send a message with a PDF via URL
# def send_pdf_with_message(message, pdf_url):
#     url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendDocument"
#     payload = {
#         "chat_id": CHAT_ID,
#         "document": pdf_url,
#         "caption": message
#     }
#     response = requests.post(url, json=payload)
#     print("PDF via URL Status:", response.status_code)
#     print("Response:", response.json())
#
#
# # 🧪 Example usage:
# if _name_ == "_main_":
#     send_text_message("✅ Hello from Python bot with no attachments.")
#     send_pdf_with_message("📄 Here is a PDF from a public URL", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")