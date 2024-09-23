/** Telegram bot class */
export class tgbot {
  token: string
  api_url: string

  /**
  * @param {string} token - The bot token
  */
  constructor(token: string) {
    this.token = token
    this.api_url = `https://api.telegram.org/bot${this.token}/`
  }

  // === Getting updates ===
  // 怎麼沒有用r QQ
  /**
   * @param {object} options
   * @param {number} options.offset - offset
   * @param {number} options.limit - limit
   * @param {number} options.timeout - timeout
   * @param {string[]} options.allowed_updates - allowed_updates
  */
  public getUpdates(
    {
      offset = '',
      limit = 100,
      timeout = 0,
      allowed_updates = ''
    }: {
        offset?: number | string,
        limit?: number,
        timeout?: number,
        allowed_updates?: string | string[],
      } = {}
  ) {
    /**
   * @param {object} options
   * @param {number} options.offset - offset
   * @param {number} options.limit - limit
   * @param {number} options.timeout - timeout
   * @param {string[]} options.allowed_updates - allowed_updates
  */

    let start_payload = {
      "method": "getUpdates",
      "offset": offset,
      "limit": limit,
      "timeout": timeout,
      "allowed_updates": allowed_updates,
    }
    return this.start(start_payload)
  }

  public setWebhook({
    url = '',
    certificate = '',
    max_connections = 40,
    allowed_updates = []
  }: {
      url: string,
      certificate?: any,
      max_connections?: number,
      allowed_updates?: string[],
    } = {
      url: '',
    }
  ) {
    if (url === '') this.miss_parameter("url")
    let start_payload = {
      "method": "setWebhook",
      "url": url,
      "certificate": certificate,
      "max_connections": max_connections,
      "allowed_updates": allowed_updates,
    }
    return this.start(start_payload)
  }

  public deleteWebhook() {
    let start_payload = {
      "method": "deleteWebhook",
    }
    return this.start(start_payload)
  }

  public getWebhookInfo() {
    let start_payload = {
      "method": "getWebhookInfo",
    }
    return this.start(start_payload)
  }

  // === Available methods ===
  public getMe() {
    let start_payload = {
      "method": "getMe",
    }
    return this.start(start_payload)
  }

  public sendMessage(
    {
      chat_id = '',
      text = '',
      parse_mode = '',
      disable_web_page_preview = false,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = '',
    }: {
        chat_id: string | number,
        text: string,
        parse_mode?: string | undefined,
        disable_web_page_preview?: Boolean | undefined,
        disable_notification?: Boolean | undefined,
        reply_to_message_id?: string | number | undefined,
        reply_markup?: any | undefined,
      } = {
        chat_id: '',
        text: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (text === '') this.miss_parameter("chat_id")
    let start_payload = {
      "method": "sendMessage",
      'chat_id': String(chat_id),
      'text': String(text),
      'parse_mode': String(parse_mode),
      'disable_web_page_preview': Boolean(disable_web_page_preview),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public forwardMessage(
    {
      chat_id = '',
      from_chat_id = '',
      disable_notification = false,
      message_id = ''
    }: {
        chat_id: string | number,
        from_chat_id: string | number,
        disable_notification?: boolean,
        message_id: string | number,
      } = {
        chat_id: '',
        from_chat_id: '',
        message_id: ''
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (from_chat_id === '') this.miss_parameter("from_chat_id")
    if (message_id === '') this.miss_parameter("message_id")
    let start_payload = {
      "method": "forwardMessage",
      'chat_id': String(chat_id),
      'from_chat_id': String(from_chat_id),
      'disable_notification': Boolean(disable_notification),
      'message_id': Number(message_id)
    }
    return this.start(start_payload)
  }

  public sendPhoto(
    {
      chat_id = '',
      photo = '',
      caption = '',
      parse_mode = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: string | number,
        photo: any,
        caption?: string,
        parse_mode?: string,
        disable_notification?: boolean,
        reply_to_message_id?: string | number,
        reply_markup?: any,
      } = {
        chat_id: '',
        photo: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (photo === '') this.miss_parameter("photo")
    let start_payload = {
      "method": "sendPhoto",
      'chat_id': String(chat_id),
      'photo': photo,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendAudio(
    {
      chat_id = '',
      audio = '',
      caption = '',
      parse_mode = '',
      duration = '',
      performer = '',
      title = '',
      thumb = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: string | number,
        audio: any,
        caption?: string,
        parse_mode?: string,
        duration?: number | string,
        performer?: string,
        title?: string,
        thumb?: any,
        disable_notification?: boolean,
        reply_to_message_id?: string | number,
        reply_markup?: any,
      } = {
        chat_id: '',
        audio: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (audio === '') this.miss_parameter("audio")
    let start_payload = {
      "method": "sendAudio",
      'chat_id': String(chat_id),
      'audio': audio,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'duration': Number(duration),
      'performer': String(performer),
      'title': String(title),
      'thumb': thumb,
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendDocument(
    {
      chat_id = '',
      document = '',
      thumb = '',
      caption = '',
      parse_mode = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        document: any,
        thumb?: any,
        caption?: string,
        parse_mode?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        document: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (document === '') this.miss_parameter("document")
    let start_payload = {
      "method": "sendDocument",
      'chat_id': String(chat_id),
      'document': document,
      'thumb': thumb,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendVideo(
    {
      chat_id = '',
      video = '',
      duration = '',
      width = '',
      height = '',
      thumb = '',
      caption = '',
      parse_mode = '',
      supports_streaming = false,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        video: any,
        duration?: number | string,
        width?: number | string,
        height?: number | string,
        thumb?: any,
        caption?: string,
        parse_mode?: string,
        supports_streaming?: boolean,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        video: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (video === '') this.miss_parameter("video")
    let start_payload = {
      "method": "sendVideo",
      'chat_id': String(chat_id),
      'video': video,
      'duration': Number(duration),
      'width': Number(width),
      'height': Number(height),
      'thumb': thumb,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'supports_streaming': Boolean(supports_streaming),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendAnimation(
    {
      chat_id = '',
      animation = '',
      duration = '',
      width = '',
      height = '',
      thumb = '',
      caption = '',
      parse_mode = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        animation: any,
        duration?: number | string,
        width?: number | string,
        height?: number | string,
        thumb?: any,
        caption?: string,
        parse_mode?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        animation: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (animation === '') this.miss_parameter("animation")
    let start_payload = {
      "method": "sendAnimation",
      'chat_id': String(chat_id),
      'animation': animation,
      'duration': Number(duration),
      'width': Number(width),
      'height': Number(height),
      'thumb': thumb,
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendVoice(
    {
      chat_id = '',
      voice = '',
      duration = '',
      caption = '',
      parse_mode = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        voice: any,
        duration?: number | string,
        caption?: string,
        parse_mode?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        voice: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (voice === '') this.miss_parameter("voice")
    let start_payload = {
      "method": "sendVoice",
      'chat_id': String(chat_id),
      'voice': voice,
      'duration': Number(duration),
      'caption': String(caption),
      'parse_mode': String(parse_mode),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendVideoNote(
    {
      chat_id = '',
      video_note = '',
      duration = '',
      length = '',
      thumb = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        video_note: any,
        duration?: number | string,
        length?: string,
        thumb?: any,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        video_note: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (video_note === '') this.miss_parameter("video_note")
    let start_payload = {
      "method": "sendVideoNote",
      'chat_id': String(chat_id),
      'video_note': video_note,
      'length': Number(length),
      'duration': Number(duration),
      'thumb': thumb,
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendMediaGroup(
    {
      chat_id = '',
      media = [],
      disable_notification = false,
      reply_to_message_id = '',
    }: {
        chat_id: number | string,
        media: any[],
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
      }
      = {
        chat_id: '',
        media: [],
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (media === []) this.miss_parameter("media")
    let start_payload = {
      "method": "sendMediaGroup",
      'chat_id': String(chat_id),
      'media': JSON.stringify(media),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
    }
    return this.start(start_payload)
  }

  public sendLocation(
    {
      chat_id = '',
      latitude = '',
      longitude = '',
      live_period = null,
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        latitude: number | string,
        longitude: number | string,
        live_period?: number | null,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        latitude: '',
        longitude: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (latitude === '') this.miss_parameter("latitude")
    if (longitude === '') this.miss_parameter("longitude")
    let start_payload = {
      "method": "sendLocation",
      'chat_id': String(chat_id),
      'latitude': Number(latitude),
      'longitude': Number(longitude),
      'live_period': Number(live_period),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public editMessageLiveLocation(
    {
      chat_id = '',
      message_id = null,
      inline_message_id = '',
      latitude = null,
      longitude = null,
      reply_markup = ''
    }: {
        chat_id?: number | string,
        message_id?: number | null,
        inline_message_id?: string,
        latitude: number | null,
        longitude: number | null,
        reply_markup?: any,
      } = {
        latitude: null,
        longitude: null,
      }
  ) {
    if (latitude === null) this.miss_parameter("latitude")
    if (longitude === null) this.miss_parameter("longitude")
    let start_payload = {
      "method": "editMessageLiveLocation",
      'chat_id': String(chat_id),
      'message_id': Number(message_id),
      'inline_message_id': String(inline_message_id),
      'latitude': Number(latitude),
      'longitude': Number(longitude),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public stopMessageLiveLocation(
    {
      chat_id = '',
      message_id = null,
      inline_message_id = '',
      reply_markup = ''
    }: {
        chat_id?: number | string,
        message_id?: number | null,
        inline_message_id?: string,
        reply_markup?: any,
      } = {}
  ) {
    let start_payload = {
      "method": "stopMessageLiveLocation",
      'chat_id': String(chat_id),
      'message_id': Number(message_id),
      'inline_message_id': String(inline_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendVenue(
    {
      chat_id = '',
      latitude = null,
      longitude = null,
      title = '',
      address = '',
      foursquare_id = '',
      foursquare_type = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        latitude: number | null,
        longitude: number | null,
        title: string,
        address: string,
        foursquare_id?: string,
        foursquare_type?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        latitude: null,
        longitude: null,
        title: '',
        address: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (latitude === null) this.miss_parameter("latitude")
    if (longitude === null) this.miss_parameter("longitude")
    if (title === '') this.miss_parameter("title")
    if (address === '') this.miss_parameter("address")
    let start_payload = {
      "method": "sendVenue",
      'chat_id': String(chat_id),
      'latitude': Number(latitude),
      'longitude': Number(longitude),
      'title': String(title),
      'address': String(address),
      'foursquare_id': String(foursquare_id),
      'foursquare_type': String(foursquare_type),
      'disable_notification': Boolean(disable_notification),
      'reply_to_message_id': Number(reply_to_message_id),
      'reply_markup': reply_markup == '' ? null : JSON.stringify(reply_markup),
    }
    if (start_payload['reply_markup'] == null) {
      delete start_payload['reply_markup']
    }
    return this.start(start_payload)
  }

  public sendContact(
    {
      chat_id = '',
      phone_number = '',
      first_name = '',
      last_name = '',
      vcard = '',
      disable_notification = false,
      reply_to_message_id = '',
      reply_markup = ''
    }: {
        chat_id: number | string,
        phone_number: string,
        first_name: string,
        last_name?: string,
        vcard?: string,
        disable_notification?: boolean,
        reply_to_message_id?: number | string,
        reply_markup?: any,
      } = {
        chat_id: '',
        phone_number: '',
        first_name: '',
      }
  ) {
    if (chat_id === '') this.miss_parameter("chat_id")
    if (phone_number === '') this.miss_parameter("phone_number")
      
