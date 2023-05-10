export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addNewCard({ name, link }) {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  sendUserInfo(profileData) {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: profileData.userName,
        about: profileData.userDescription,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  sendAvatar(avatarLink) {
    return fetch(`${this._url}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: avatarLink.avatar }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  putLike(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}
