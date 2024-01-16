if (event["source"] == "mysource") {
    nslog("rename source")
    event["source"] = "newsource"
  }
  
  if (event["source"] == "hello") {
    nslog("drop me")
    return null
  }
  
  return event