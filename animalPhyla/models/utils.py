import hashlib

def hash_password(password):
    # Hash the password using a secure hashing algorithm like SHA-256
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    return hashed_password