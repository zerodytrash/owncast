package webfinger

import (
	"testing"
)

func TestLookup(t *testing.T) {
	account := "gabektest@mastodon.cloud"
	links, err := LookupAccount(account)
	if err != nil {
		t.Errorf("unexpected error: %s", err)
	}

	for _, link := range links {
		if link["rel"] == "http://webfinger.net/rel/profile-page" && link["href"] != "https://mastodon.cloud/@gabektest" {
			t.Errorf("unexpected href: %s", link["href"])
		}

		if link["rel"] == "self" && link["href"] != "https://mastodon.cloud/users/gabektest" {
			t.Errorf("unexpected href: %s", link["href"])
		}

		if link["rel"] == "subscribe" && link["template"] != "https://mastodon.cloud/authorize_interaction?uri={uri}" {
			t.Errorf("unexpected href: %s", link["template"])
		}
	}
}
